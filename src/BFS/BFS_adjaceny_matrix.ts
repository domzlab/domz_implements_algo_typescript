import {adjacencyList, graphListToGraphMatrix, printGraphMatrix } from './graphs';

/**
 * Check if a value exists in the graph, and return path to that value
 */
function BFSAdjacencyMatrix(graphMatrix: number[][], start: number, searchValue: number): number[] {
    
    const q: number[] = [];
    const seen: boolean[] = new Array(graphMatrix.length).fill(false);
    const result: number[] = [];
    
    q.push(start);
    seen[start] = true;
    
    
    do {
        const curr = q.shift() as number;
        
        if(curr === searchValue) {
            break;
        }
        
        const currRow = graphMatrix[curr];
        for(let i = 0; i < graphMatrix.length; i++){
            if(currRow[i] === -1) continue;
            if(seen[i]) continue;
            
            seen[i] = true;
            q.push(i);
            
            if(currRow[i] !== -1 || seen[i]){
                seen[i] = true;
                q.push(i);
            }
        }
        
    } while (q.length);
    
    
    return result;

}


const graphMatrix = graphListToGraphMatrix(adjacencyList);


// let findValue = BFSAdjacencyMatrix(graphMatrix, 1, 9);
// console.log(`Result when searching for 9: ${findValue}`);