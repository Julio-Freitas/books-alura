import { DsButton } from "books-ds";
import * as S_ from './styles';
import rBanner  from "../../assets/banner-r.svg";

export const Banner = () => {
  return (
    <S_.Container>
    <S_.Image left={25} bgImage={rBanner} />
    <S_.BannerWrapper>
      <S_.Tilte>Já sabe por onde começar?</S_.Tilte>
      <S_.Description>Encontre em nossa estante o que precisa para seu desenvolvimento!</S_.Description>
      <DsButton  typeButton="secondary" text="Qual será sua próxima leitura?"/>
    </S_.BannerWrapper>
    <S_.Image left={100}  bgImage={rBanner} />
    </ S_.Container>
  );
};
