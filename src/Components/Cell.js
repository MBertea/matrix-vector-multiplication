import React from "react";
import styled from "styled-components";

const PipeHolder = styled.div`
    width: 200px;
    height: 150px;
    display: flex;
    align-items: center;
    flex-direction: column;
    white-space: pre-wrap;
`;

const CellBody = styled.div`
    height: 100px;
    width: 100px;
    background-color: lightblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
`;

const CellHolder = styled.div`
    height: 100px;
    width: 200px;
    display: flex;  
    align-items: center;
`;

const LinesHolder = styled.div`
    height: 100%;
    width: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Cell = ({value, v, vprim, x, index, line}) => {
    return (
        <PipeHolder>
            <div>{line.length !== 0 ? line.map(element => element ? element + ", " : "null, ") : " "}</div>
            <CellHolder>
                <LinesHolder>
                    {v ?? 0}
                    <div style={{width:"50px"}}>
                        <hr></hr>
                    </div>
                </LinesHolder>
                <CellBody>
                    {`P${index}`}
                    <br></br>
                    {value?`val=${value}`:null}
                    <br></br>
                    {x?`x=${x}`:null}
                </CellBody>
                <LinesHolder>
                    {vprim ?? 0}
                    <div style={{width:"50px"}}>
                        <hr></hr>
                    </div>
                </LinesHolder>
            </CellHolder>
        </PipeHolder>
    );
};

export default Cell;