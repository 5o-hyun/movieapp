import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

const SearchHeader = ({
  videoTypes,
  isSearchTab,
  searchText,
  onClickSearchTab,
}) => {
  return (
    <Container>
      <div className="searchWrapper">
        <div className="genreTabGroup">
          {videoTypes.map((videoType) => (
            <button
              key={videoType.id}
              className={
                isSearchTab === videoType.id
                  ? 'genreTabBtn active'
                  : 'genreTabBtn'
              }
              onClick={() => onClickSearchTab(videoType.id)}
            >
              {videoType.name}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchText}
        />
      </div>
      <button className="searchBtn">
        <AiOutlineSearch />
      </button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  padding: ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.tablet} {
    height: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: 6rem;
    padding: ${({ theme }) => theme.spacing.base};
  }
  .searchWrapper {
    display: flex;
    align-items: center;
    flex: 1;
    margin-right: ${({ theme }) => theme.spacing.tiny};
    .genreTabGroup {
      display: flex;
      gap: 0.4rem;
      margin-right: ${({ theme }) => theme.spacing.tiny};
      .genreTabBtn {
        color: ${({ theme }) => theme.colors.white};
        padding: 0.6rem 2rem;
        height: 4rem;
        font-size: 1.4rem;
        text-transform: uppercase;
        border: 1px solid ${({ theme }) => theme.colors.gray[700]};
        background-color: #111;
        border-radius: 0.4rem;
        @media ${({ theme }) => theme.devices.mobile} {
          padding: 0.6rem 1.2rem;
          height: 2.8rem;
          font-size: 1.2rem;
        }

        &.active {
          background-color: #273c5a;
          border-color: transparent;
        }
      }
    }
    input {
      height: 4rem;
      background-color: #111;
      flex: 1;
      font-size: 1.4rem;
      border: 0;
      border-radius: 0.4rem;
      padding-left: 1rem;
      color: ${({ theme }) => theme.colors.white};

      &:focus {
        outline: none;
      }
      @media ${({ theme }) => theme.devices.mobile} {
        height: 2.8rem;
        font-size: 1.2rem;
      }
    }
  }
  .searchBtn {
    height: 4rem;
    aspect-ratio: 1 / 1;
    background-color: #111;
    @media ${({ theme }) => theme.devices.mobile} {
      height: 2.8rem;
    }
    svg {
      color: ${({ theme }) => theme.colors.subColor};
      width: 80%;
      height: 80%;
    }
  }
`;

export default SearchHeader;
