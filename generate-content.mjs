import fs from 'node:fs';
import path from 'node:path';

function randInt(a,b){ return Math.floor(Math.random()*(b-a+1))+a; }
function pick(arr){ return arr[randInt(0,arr.length-1)]; }
function shuffle(arr){ return arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); }

const RW_COUNT = 54;
const MATH_COUNT = 44;

const vocabPairs = [
  ['reduce','diminish'],['increase','amplify'],['careful','meticulous'],
  ['confusing','opaque'],['clear','lucid'],['rare','infrequent'],
  ['angry','irate'],['happy','elated'],['helpful','beneficial']
];

function makeRW(i){
  const types = ['grammar','usage','transition','vocab','reading'];
  const t = pick(types);
  if(t==='vocab'){
    const [a,b] = pick(vocabPairs);
    const sentence = `The scientist sought a more ${b} explanation after the initial results proved too ${pick(['vague','ambiguous','tentative'])}.`;
    const choices = shuffle([b, 'verbose','erroneous','speculative']);
    const answer = choices.indexOf(b);
    return { section:'rw', type:t, stem:`Choose the word that best fits the sentence.`, passage:sentence, choices, answer, explanation:`${b} best conveys the intended meaning.` };
  }
  if(t==='transition'){
    const choices = shuffle(['However','Therefore','Meanwhile','Consequently']);
    const answer = choices.indexOf('However');
    return { section:'rw', type:t, stem:'Select the best transition to contrast the ideas.', passage:'The hypothesis seemed promising. ___, the data failed to support it.', choices, answer, explanation:'A contrast is needed; "However" fits.' };
  }
  if(t==='grammar'){
    const choices = shuffle(['are','is','were','be']);
    const answer = choices.indexOf('is');
    return { section:'rw', type:t, stem:'Choose the correct verb form to agree with the subject.', passage:'A collection of essays ___ on the table.', choices, answer, explanation:'Subject is singular (“collection”), so “is” is correct.' };
  }
  if(t==='usage'){
    const choices = shuffle(['fewer','less','little','least']);
    const answer = choices.indexOf('fewer');
    return { section:'rw', type:t, stem:'Choose the most precise and conventional word.', passage:'The lab used ___ samples this year than last year.', choices, answer, explanation:'Countable noun “samples” takes “fewer”.' };
  }
  const choices = shuffle(['to argue that urban trees provide measurable benefits','to narrate a personal experience','to describe a historical monument','to criticize city councils']);
  const answer = choices.indexOf('to argue that urban trees provide measurable benefits');
  return { section:'rw', type:t, stem:'What is the main purpose of the passage?', passage:'Studies show urban canopy cover lowers temperatures, reduces stormwater runoff, and improves public health in measurable ways.', choices, answer, explanation:'The passage presents claims and evidence about benefits.' };
}

function makeMath(i){
  const a = randInt(2,12);
  const b = randInt(2,12);
  const c = a*b;
  const choices = shuffle([a, b, c, a+b]);
  const answer = choices.indexOf(c);
  return { section:'math', type:'algebra', stem:`Solve for x: if ${a}x = ${c}, what is x?`, choices, answer, explanation:`Divide both sides by ${a} to get x=${c}/${a}=${c/a}.` };
}

const rw = Array.from({length: RW_COUNT}, (_,i)=> makeRW(i));
const math = Array.from({length: MATH_COUNT}, (_,i)=> makeMath(i));

const out = { rw, math };
const outPath = path.join(process.cwd(), 'data', 'test.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log('Generated content at', outPath, `RW=${rw.length} Math=${math.length}`);
