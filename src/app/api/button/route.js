// pages/api/button.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
    // IDが指定されていなかったら、Bad Request
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({
            error: 'bad request'
        }, {status: 400});
    }

    try {
        const results = await prisma.buttonState.findMany({
            where: {id: Number(id)}
        });

        // もしそのIDが見つからなければNot Foundエラー
        if (results.length === 0) {
            return NextResponse.json({
                error: 'not found'
            }, {status: 404});
        }

        return NextResponse.json({
            isOpen: results[0].isOpen
        });
    } catch (error) {
        return NextResponse.json({
            error: error
        }, {status: 500});
    }
}

export async function POST(req) {
    const body = await req.json();
    console.log(body);
    const id = body['id'];
    const isOpen = body['isOpen'];

    try {
        const results = await prisma.buttonState.findMany({
            where: {id: id}
        });

        // もしそのIDが見つからなければ新規作成
        if (results.length === 0) {
            await prisma.buttonState.create({
                data: {
                    id: id,
                    isOpen: isOpen,
                    updatedAt: new Date()
                }
            })
        }

        await prisma.buttonState.update({
            data: {
                isOpen: isOpen,
                updatedAt: new Date()
            },
            where: {id: id}
        });

        return NextResponse.json({
            isOpen: isOpen
        });
    } catch (error) {
        return NextResponse.json({
            error: error
        }, {status: 500});
    }
}
