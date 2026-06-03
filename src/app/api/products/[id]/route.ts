import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const updates = await request.json();
    
    const dbPath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const fileContents = await readFile(dbPath, 'utf-8');
    const products = JSON.parse(fileContents);

    if (!Array.isArray(products)) {
        throw new Error('Database file is corrupted: not an array');
    }

    const productIndex = products.findIndex((p: any) => p.id === id);
    if (productIndex === -1) {
        return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    // Merge updates
    products[productIndex] = { ...products[productIndex], ...updates };

    await writeFile(dbPath, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true, product: products[productIndex] });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json({ success: false, error: 'Failed to update product' }, { status: 500 });
  }
}
