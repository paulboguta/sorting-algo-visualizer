import { useState, useEffect } from "react";
import styled from "styled-components";
import { arraysAreEqual, generateRandomNumbers } from "../utils/utils";
import { mergeSortHelper } from "../SortingAlgorithms/SortingAlgorithms";

export const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    let newArr = [];
    for (let i = 0; i < 310; i++) {
      newArr.push(generateRandomNumbers(5, 730));
    }
    setArray([...newArr]);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const mergeSort = () => {
    const jsSortedArray = array.slice().sort((a, b) => a - b);
    const sortedArray = mergeSortHelper(array);

    console.log(arraysAreEqual(jsSortedArray, sortedArray));
  };

  return (
    <Wrapper>
      {array.map((value, key) => {
        return <ArrayBar key={key} style={{ height: `${value}px` }}></ArrayBar>;
      })}
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={() => mergeSort()}>Merge Sort</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 100px;
  bottom: 100px;
`;

const ArrayBar = styled.div`
  height: ${(props) => props.height};
  width: 2px;
  background-color: blue;
  display: inline-block;
  margin: 0 1px;
  transform: rotate(180deg) scaleX(-1);
`;
