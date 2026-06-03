import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const newProduct = await request.json();
    
    const dbPath = path.join(process.cwd(), 'src', 'data', 'products.json');
    const fileContents = await readFile(dbPath, 'utf-8');
    const products = JSON.parse(fileContents);

    if (!Array.isArray(products)) {
        throw new Error('Database file is corrupted: not an array');
    }

    // Add new product at the beginning of the array so it shows up first
    products.unshift(newProduct);

    await writeFile(dbPath, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    console.error('Error saving product:', error);
    return NextResponse.json({ success: false, error: 'Failed to save product' }, { status: 500 });
  }
}
