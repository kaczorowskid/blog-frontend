import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const Container = styled.div<{ isExpand: boolean }>`
  min-height: 175px;
  padding: 32px 0px;
  margin-bottom: 32px;
  cursor: pointer;
  border-top: 1px solid #1e1e20;
  border-bottom: 32px;
  border-bottom: 1px solid #1e1e20;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery.tablet} {
    display: block;
  }
`;

export const Date = styled.div`
  color: rgb(101 101 101);
`;

export const Title = styled.h2`
  margin: 10px 0;
  font-size: 1.9rem;
  font-weight: 400;
`;

export const Description = styled.p`
  margin: 0 0 20px 0;
  color: rgb(101 101 101);
`;

export const Image = styled(motion.img)`
  width: 100%;
  min-height: 240px;
  object-fit: cover;

  ${mediaQuery.tablet} {
    width: 350px;
  }
`;

export const ExpandableContainer = styled(motion.div)`
  display: flex;
  flex-direction: column-reverse;
  column-gap: 20px;
  align-items: center;
  overflow: hidden;

  ${mediaQuery.tablet} {
    flex-direction: row;
  }
`;

export const ExpandableSection = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;
