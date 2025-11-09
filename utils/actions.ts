'use server'

import db from '@/utils/db';
import { redirect } from 'next/navigation';
import image1 from '@/public/images/hero1.jpg';
import { currentUser } from '@clerk/nextjs/server';
import { get } from 'http';



const getauthuser = async () => {
    const user = await currentUser();
    if (!user) redirect('/')
    return user
}

export async function fetchFeaturedProducts() {
    const products = await db.product.findMany({
        where: {
            featured: true
        },

    })
    return products
}

export async function fetchAllProducts({ search = '' }: { search: string }) {
    const products = await db.product.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        where: {
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { company: { contains: search, mode: 'insensitive' } },
            ],
        }
    })
    return products
}



export const fetchSingleProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });
    if (!product) {
        redirect('/products');
    }
    return product;
};

export const createProductAction = async (prevState: any, formData: FormData)
    : Promise<{ message: string }> => {

    const user = await getauthuser();

    try {


        const name = formData.get('name') as string;
        const company = formData.get('company') as string;
        const price = Number(formData.get('price') as string);
        //temp
        const image = formData.get('image') as File;
        const description = formData.get('description') as string;
        const featured = Boolean(formData.get('featured') as string);

        await db.product.create({
            data: {
                name,
                company,
                price,
                image: '@/public/images/hero1.jpg',
                description,
                featured,
                clerkId: user.id,
            },
        })
        return { message: 'product created' }

    } catch (error) {
        return { message: ' there was an error ' + error }
    }

}