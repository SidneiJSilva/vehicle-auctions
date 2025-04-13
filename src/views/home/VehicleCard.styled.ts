import styled from 'styled-components'

export const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
  cursor: pointer;
`

export const Price = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-top: 8px;
  text-align: right;
  margin-bottom: 8px;
`

export const ImagePlaceholder = styled.div`
  background-color: #f2f2f2;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #888;
`

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin: 0;
`

export const InfoRow = styled.div`
  font-size: 0.9rem;
  color: #555;
  display: flex;
  justify-content: space-between;
`

export const AuctionTag = styled.div`
  background: #e6f4ea;
  color: #1b5e20;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 6px;
  width: fit-content;
`

export const FavoriteButton = styled.button<{ 'data-active': boolean }>`
  margin-top: 8px;
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${({ 'data-active': active }) => (active ? '#e63946' : '#ccc')};

  &:hover {
    color: #e63946;
  }
`
