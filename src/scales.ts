export const CHROMATIC=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'] as const;
export const MAJOR_STEPS=[2,2,1,2,2,2,1] as const;
export function majorScale(root:number){let p=root;const out=[CHROMATIC[p%12]];for(const s of MAJOR_STEPS){p+=s;out.push(CHROMATIC[p%12])}return out}
export const SCALE_EXAMPLES=[{name:'C',root:0},{name:'D',root:2},{name:'F',root:5},{name:'G',root:7}] as const;