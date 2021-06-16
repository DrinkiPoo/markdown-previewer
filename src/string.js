const str = `
# This is a heading
## This is a sub-heading
### This is a sub-sub-heading

This [link](https://duckduckgo.com) will take you to Google!

Backticks will allow you to include inline code like this: \`document.getElementById("important").innerHTML = null; \`

Three backtics in a row will start a block code. Like this:
\`\`\`
for(let i = 0; i < 100; i++ ){
  console.log(i);
}
\`\`\`

## Unordered List:
* India
* China
* Burundi

## Ordered List:
1. India
2. China
3. Burundi

> Greater than sign will initiate a block quote
> Aother GT sing will end it. I think. Not sure. 

**this means bold text**

## Image
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default str

