'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { loadProgress, saveProgress } from '@/lib/storage';

export default function Start(){
  const [meta,setMeta] = useState(null);
  useEffect(()=>{
    fetch('/api/test').then(r=>r.json()).then(setMeta);
  },[]);

  function reset(){
    saveProgress('answers', {});
    saveProgress('startTime', Date.now());
  }

  if(!meta) return <div className="card">Loading…</div>;
  return (
    <div className="grid">
      <div className="card">
        <div className="card-title">About this test</div>
        <p className="muted">This SAT-style test contains {meta.countRW} Reading & Writing questions and {meta.countMath} Math questions. Nothing here reproduces College Board content.</p>
      </div>
      <div className="card">
        <div className="row">
          <Link className="btn primary" href={`/test/section/rw/0`} onClick={reset}>Start Reading & Writing</Link>
          <Link className="btn" href={`/test/section/math/0`} onClick={reset}>Start Math</Link>
        </div>
      </div>
    </div>
  );
}