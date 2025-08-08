import { NextResponse } from 'next/server';
import data from '@/data/test.json';

export async function GET(){
  const rw = data.rw || [];
  const math = data.math || [];
  return NextResponse.json({ 
    countRW: rw.length, 
    countMath: math.length, 
    rw, math 
  });
}