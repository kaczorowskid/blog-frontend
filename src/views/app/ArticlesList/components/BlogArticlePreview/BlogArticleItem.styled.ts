import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 175px;
  padding: 32px 0px;
  border-bottom: 32px;
  border: 1px solid #1e1e20;
  border-left: none;
  border-right: none;
  margin-bottom: 32px;
`;

export const Date = styled.div`
  color: #797a79;
`;

export const Title = styled.h3`
  font-size: 1.9rem;
  font-weight: 400;
  margin: 10px 0;
`;

export const Description = styled.div`
  color: #797a79;
  margin: 0 0 20px 0;
`;

export const Image = styled(motion.img)`
  width: 350px;
  min-height: 240px;
  object-fit: cover;
`;

export const ExpandableContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  column-gap: 20px;
  overflow: hidden;
`;

export const ExpandableSection = styled(motion.div)`
  overflow: hidden;
  position: relative;
`;
