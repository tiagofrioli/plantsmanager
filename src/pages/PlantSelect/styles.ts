import styled from 'styled-components/native';
import Typography from '../../components/Typography';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};

`;


export const TextQuestion = styled(Typography)`
    font-size: 17px;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height: 20px;
    margin-top: 15px;
    margin-left: 30px;    
`;

export const ContainerPlants = styled.View`
    flex: 1;
    padding: 0 32px;
    justify-content: center;
`;
