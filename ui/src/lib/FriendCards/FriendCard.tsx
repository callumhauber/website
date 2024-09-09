import styled from '@emotion/styled';

import { arrowMarker } from '../../assets';

import { noLine } from '../../css';

export interface FriendCardProps {
  link: string;
  image: string;
  text: string;
  here?: boolean;
}

const StyledFriendCard = styled.div`
  // card
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #1e1e23;
  border-radius: 10px;
  box-shadow: -1em 0 2em #000000;
  /*   margin-left: -50px; */
  transition: 0.2s ease-out;
  position: relative;
  left: 0px;

  &:not(:first-child) {
    margin-left: -50px;
  }

  &:hover {
    transform: translateY(-20px);
    transition: 0.2s ease-out;

    img {
      opacity: 1;
    }
  }

  &:hover ~ div {
    position: relative;
    left: 50px;
    transition: 0.2s ease-out;
  }

  // fwend
  height: 280px;
  width: 200px;
  padding: 0px;

  &:first-child {
    pointer-events: none;
  }
`;

const StyledFriendCardLink = styled.a`
  color: #ffffff;
  text-shadow: 8px 8px 6px #000000;

  ${noLine}
`;

const StyledFriendCardImage = styled.img`
  pointer-events: auto;
  max-width: 100%;
  opacity: 0.4;
`;

const StyledFriendCardText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }
`;

const StyledFriendCardHere = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 0);

  @keyframes bounce {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 10px, 0);
    }
  }

  img {
    width: 80px;
    filter: drop-shadow(0 0 6px #000000);
    animation: bounce 0.5s;
    animation-direction: alternate;
    animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
    animation-iteration-count: infinite;
  }
`;

export function FriendCard({ link, image, text, here = false }: FriendCardProps) {
  return (
    <StyledFriendCard>
      <StyledFriendCardLink href={link} target="_blank">
        {here && (
          <StyledFriendCardHere>
            <img alt="here" src={arrowMarker} />
          </StyledFriendCardHere>
        )}
        <StyledFriendCardImage src={image} alt={text} />
        <StyledFriendCardText>
          <p>{text}</p>
        </StyledFriendCardText>
      </StyledFriendCardLink>
    </StyledFriendCard>
  );
}

export default FriendCard;
