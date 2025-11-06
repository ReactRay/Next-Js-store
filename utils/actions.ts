import db from '@/utils/db';


export async function fetchFeaturedProducts() {
    const products = await db.product.findMany({
        where: {
            featured: true
        }
    })
}