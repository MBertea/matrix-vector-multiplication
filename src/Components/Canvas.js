import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cell from "./Cell";

const PageHolder = styled.div`
    height: 100vh;
    width: 100vw;
    display flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const CellsHolder = styled.div`
    display: flex;
    flex-direction: row;
`;

const Canvas = () => {
    const [matrix, setMatrix] = useState([[1, 2, 1, 3], [1, -1, 2, -2], [4, 3, 2, 1]]);
    const [vector, setVector] = useState([1, 2, 3, 4]);
    const [stepCount, setStepCount] = useState(0);
    const [valObjects, setValObjects] = useState([])

    useEffect(() => {
        const matrixCpy = [...matrix];
        matrixCpy.forEach((element, index) => {
            for (let i = 0; i < (matrixCpy.length - 1) - index; i++ ) {
                element.unshift(null);
            };
        });
        setMatrix(matrixCpy);

        let valObjCpy;
        valObjCpy = matrixCpy.map(element => Object({value: 0, v: null, vprim: null, x: null}));
        setValObjects(valObjCpy);
    }, []);

    const handleClickAdvance = () => {
        let valObjCpy = [...valObjects];
        
        for (let i = 0; i < valObjCpy.length; i++) {
            valObjCpy[i].x = !(matrix[i][stepCount]) ? 0 : matrix[i][stepCount];
            valObjCpy[i].v = i < valObjCpy.length - 1 ? valObjCpy[i+1].vprim : stepCount < vector.length ? vector[stepCount] : 0;
        }

        for (let i = 0; i < valObjCpy.length; i++) {
            valObjCpy[i].value += valObjCpy[i].v * valObjCpy[i].x;
            valObjCpy[i].vprim = valObjCpy[i].v;
        }
        setStepCount(stepCount+1);
        setValObjects(valObjCpy);
    };

    return(
        <PageHolder>
            <CellsHolder>
                {valObjects.reverse().map((element, index) =>
                    <Cell 
                        line={matrix[index].slice(stepCount)}
                        key={"CellNo" + index}
                        value={element.value}
                        v={element.v}
                        vprim={element.vprim}
                        x={element.x}
                        index={index}
                    /> 
                )}
            </CellsHolder>
            <button onClick={handleClickAdvance}>Advance</button>
        </PageHolder>
    );
};

export default Canvas;