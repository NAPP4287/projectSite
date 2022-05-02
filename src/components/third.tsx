import {
  ThirdWrap,
  ProjectTextWrap,
  ProjectWrap,
  ProjectGif,
  movingScrollRandom,
} from '../styled/thirdStyle';
import projectData from '../data/projectData';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomIndex, randomIndexStatus } from '../redux/random/randomIndex';
import styled, { keyframes } from 'styled-components';

function Third() {
  const dispatch = useDispatch();
  const randomStatus = useSelector(randomIndexStatus);
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(index + 1);

  const indexInfinite = () => {
    dispatch(randomIndex({ randomIndex: Math.floor(Math.random() * 4) }));

    if (index < 2) {
      setIndex(index + 1);
    } else if (index === 2) {
      setIndex(0);
    }

    if (nextIndex < 2) {
      setNextIndex(nextIndex + 1);
    } else if (nextIndex === 2) {
      setNextIndex(0);
    }

    console.log(randomStatus.randomIndex);
    // console.log(index);
  };
  console.log('aaa', index);
  console.log('bbb', nextIndex);
  // project 무한루프 돌게 해주기 위한 무한 index 값

  const goneScroll = keyframes`
       ${movingScrollRandom[randomStatus.randomIndex].gone}       
    `;

  const comeScroll = keyframes`
       ${movingScrollRandom[randomStatus.randomIndex].come}       
    `;

  const ProjectBox1 = styled.div`
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${comeScroll} 2s ease forwards;
    @media (max-width: 900px) {
      flex-direction: column;
      height: 450px;
      justify-content: center;
    }
  `;

  const ProjectBox2 = styled.div`
    height: 450px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${goneScroll} 2s ease forwards;
    @media (max-width: 900px) {
      flex-direction: column;
      height: 450px;
      justify-content: center;
    }
  `;

  return (
    <ThirdWrap>
      <ProjectWrap onWheel={indexInfinite}>
        <ProjectBox2>
          <ProjectTextWrap>
            <h3>{projectData[index].title}</h3>
            <p>{projectData[index].desc}</p>
          </ProjectTextWrap>
          <ProjectGif style={{backgroundImage:projectData[index].url}}></ProjectGif>
        </ProjectBox2>
        <ProjectBox1>
          <ProjectTextWrap>
            <h3>{projectData[nextIndex].title}</h3>
            <p>{projectData[nextIndex].desc}</p>
          </ProjectTextWrap>
          <ProjectGif style={{backgroundImage:projectData[nextIndex].url}}></ProjectGif>
        </ProjectBox1>
      </ProjectWrap>
    </ThirdWrap>
  );
}

export default Third;
