import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div<{ isExpand: boolean }>`
  min-height: 175px;
  padding: 32px 0px;
  margin-bottom: 32px;
  cursor: pointer;
  border-top: 1px solid #1e1e20;
  border-bottom: 32px;
  border-bottom: 1px solid #1e1e20;
`;

export const Date = styled.div`
  color: #797a79;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 1.9rem;
  font-weight: 400;
`;

export const Description = styled.div`
  margin: 0 0 20px 0;
  color: #797a79;
`;

export const Image = styled(motion.img)`
  width: 350px;
  min-height: 240px;
  object-fit: cover;
`;

export const ExpandableContainer = styled(motion.div)`
  display: flex;
  column-gap: 20px;
  align-items: center;
  overflow: hidden;
`;

export const ExpandableSection = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;
