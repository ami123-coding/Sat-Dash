import Link from 'next/link';
export default function Page(){
  return (
    <div className="grid grid-2">
      <div className="card">
        <div className="card-title">Full-Length Practice Test</div>
        <p className="muted">Reading & Writing + Math • Timing • Review • Score Report</p>
        <div style={{height:10}} />
        <Link className="btn primary" href="/test/start">Begin</Link>
      </div>
      <div className="card">
        <div className="card-title">Resume or Review</div>
        <p className="muted">Pick up where you left off or view your results.</p>
        <div style={{height:10}} />
        <div className="row">
          <Link className="btn" href="/test/start">Resume</Link>
          <Link className="btn" href="/score">Score Report</Link>
          <Link className="btn" href="/review">Review Answers</Link>
        </div>
      </div>
    </div>
  );
}