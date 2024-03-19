interface GraphNode {
    to: number,
    weight: number
}

const adjacencyList: GraphNode[][] = [];

adjacencyList[1] = [
    {to: 2, weight: 1},
    {to: 4, weight: 1}
];

adjacencyList[2] = [
    {to: 1, weight: 1},
    {to: 3, weight: 1}
];


adjacencyList[3] = [
    {to: 4, weight: 1},
    {to: 2, weight: 1},
    {to: 10, weight: 1},
    {to: 9, weight: 1}
];

adjacencyList[4] = [
    {to: 1, weight: 1},
    {to: 3, weight: 1}
];


adjacencyList[5] = [
    {to: 6, weight: 1},
    {to: 2, weight: 1},
    {to: 8, weight: 1},
    {to: 7, weight: 1}
];

adjacencyList[6] = [
    {to: 5, weight: 1}  
];

adjacencyList[7] = [
    {to: 5, weight: 1},
    {to: 2, weight: 1},
    {to: 8, weight: 1}
];

adjacencyList[8] = [
    {to: 2, weight: 1},
    {to: 5, weight: 1},
    {to: 7, weight: 1}
];

adjacencyList[9] = [
    {to: 3, weight: 1}
];

adjacencyList[10] = [
    {to: 3, weight: 1}
];

// function to convert graph list to graph matrix
function graphListToGraphMatrix(graphList: GraphNode[][]): number[][] {
    
    const graphMatrix = new Array(graphList.length);
    
    for(let i = 0; i < graphMatrix.length; i++){
        graphMatrix[i] = new Array(graphList.length).fill(-1);
    }
    
    printGraphMatrix(graphMatrix)
    
    for(let i = 0; i < graphList.length; i++){
        if(graphList[i] !== undefined){
            for(let j = 0; j < graphList[i].length; j++){
                const graphNode = graphList[i][j];
                
                // console.log(`i: ${i}, j: ${j}`);
                // console.log(graphNode);
                
                graphMatrix[i][graphNode.to] = graphNode.weight;
            }
        }
        
    }
    
    printGraphMatrix(graphMatrix);
    return graphMatrix;
}


function printGraphMatrix(graphMatrix: number[][]): void {
    
    const printString = (value: string, maxValue: string) => {
        let out = [];
        
        const valueSize = value.length;
        const maxValueSize = maxValue.length;
        
        for(let i = 0; i < maxValueSize - valueSize; i++ ){
            out.push(' ');
        }
        
        out.push(value);
        
        return out.join('');
    };
    
    let firstRow = [printString(' ', (graphMatrix.length+2).toString())];
    for(let i = 0; i < graphMatrix.length; i++){
        firstRow.push(printString(i.toString(), (graphMatrix.length).toString()))
    }
    console.log(firstRow.join(' '));
    
    for(let i = 0; i < graphMatrix.length; i++){
        let out = [`${printString(i.toString(), (graphMatrix.length).toString())}: `];
        
        // get the length of the current digit
        // compare it to lenght of maximum digit
        // that will return the number of spaces that current digit will have 
        // before printing the actual digit
        
        for(let j = 0; j < graphMatrix[i].length; j++){
            const graphNodeWeight = graphMatrix[i][j];
            const graphNodeWeightString = printString(graphNodeWeight.toString(), (graphMatrix.length).toString());
            out.push((j === graphMatrix[i].length - 1) ? `${graphNodeWeightString}` : `${graphNodeWeightString}  `);
        }
        
        console.log(out.join(''))
    }
}

export {
    adjacencyList,
    graphListToGraphMatrix,
    printGraphMatrix
}