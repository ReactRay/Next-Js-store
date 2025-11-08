'use server'

import db from '@/utils/db';
import { redirect } from 'next/navigation';


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

    return { message: 'product created' };
}