export function saveProgress(key, value){
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
}
export function loadProgress(key, fallback){
  if (typeof window === 'undefined') return fallback;
  try{ return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; }catch{ return fallback; }
}