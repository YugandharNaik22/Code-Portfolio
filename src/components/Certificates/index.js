/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { certificates } from '../../data/constants'; // Importing the dummy data
import './index.css'
// Styled Components
const Container = styled.div`
  padding: 50px;
  margin-top:20px;
  background-color: #19212C;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 36px;
  color: white;
`;

const Desc = styled.p`
  font-size: 18px;
  color: white;
  margin-bottom: 40px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 250px;
  margin: 15px;
  padding: 20px;
  background-color: lavender;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
  font-size: 22px;
  color: #444;
`;

const CardProvider = styled.p`
  font-size: 16px;
  color: #777;
`;

const CardDate = styled.p`
  font-size: 14px;
  color: #999;
`;

const ModalContent = styled.div`
  width: 400px;
  padding: 20px;
  color:white;
  margin:20px;
  background-color: #19212C;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseIcon = styled(CloseRounded)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Certificates = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCertificate(null);
  };

  return (
    <Container id="certificates">
      <Wrapper>
        <Title>My Certifications</Title>
        <Desc>Here are some of my most recent certifications</Desc>
        <CardContainer>
          {certificates.map((certificate, index) => (
            <Card key={index} onClick={() => handleOpenModal(certificate)}>
              <CardTitle>{certificate.title}</CardTitle>
              <CardProvider>{certificate.provider}</CardProvider>
              <CardDate>{certificate.date}</CardDate>
              <img src = {certificate.image} className='Cimg'/>
            </Card>
          ))}
        </CardContainer>
        <Modal open={openModal} onClose={handleCloseModal}>
          <ModalContent>
            <CloseIcon onClick={handleCloseModal} />
            {selectedCertificate && (
              <>
                <h3>{selectedCertificate.title}</h3>
                <p>{selectedCertificate.provider}</p>
                <p>{selectedCertificate.date}</p>
               
                {selectedCertificate.image && (
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    style={{ width: '100%', borderRadius: '10px', marginTop: '15px' }}
                  />
                )}
                {selectedCertificate.link && (
                  <a
                    href={selectedCertificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', marginTop: '10px', color: '#3498db' }}
                  >
                    View Certificate
                  </a>
                )}
              </>
            )}
          </ModalContent>
        </Modal>
      </Wrapper>
    </Container>
  );
};

export default Certificates;
