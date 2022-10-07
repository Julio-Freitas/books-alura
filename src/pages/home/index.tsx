import { IoMdCart, IoMdHeart } from "react-icons/io";
import { DsButton, DsTag } from "books-ds";
import { Banner, Box } from "../../components";
import * as S_ from "./styles";

export const Home = () => {
  const tags = {
    lineOne: ["Android", "OO", "Marketing Digital", "Agile"],
    lineTwo: ["Startups", "HTML & CSS", "Java", "Python"],
  };
  return (
    <div>
      <Banner />
      <Box title="ÚLTIMOS LANÇAMENTOS">
        <S_.WrapperImg>
          <div />
          <div />
          <div />
        </S_.WrapperImg>

        <S_.BoxContents>
          <header>
            <h3>Sobre o livro:</h3>
            <div>
              <IoMdCart />
              <IoMdHeart />
            </div>
          </header>
          <S_.BoxBody>
            <h4>JavaScript Assertivo</h4>
            <p>Testes e qualidade de código em todas as camadas da aplicação</p>
            <span>Por: Gabriel Ramos</span>
          </S_.BoxBody>
          <footer>
            <div>
              <span> A partir de:</span>
              <label> R$ 29,90 </label>
            </div>
            <DsButton text="comprar"></DsButton>
          </footer>
        </S_.BoxContents>
      </Box>

      <Box title="mais Vendidos">
        <S_.WrapperImg>
          <div />
          <div />
          <div />
        </S_.WrapperImg>

        <S_.BoxContents>
          <header>
            <h3>Sobre o livro:</h3>
            <div>
              <IoMdCart />
              <IoMdHeart />
            </div>
          </header>
          <S_.BoxBody>
            <h4>JavaScript Assertivo</h4>
            <p>Testes e qualidade de código em todas as camadas da aplicação</p>
            <span>Por: Gabriel Ramos</span>
          </S_.BoxBody>
          <footer>
            <div>
              <span> A partir de:</span>
              <label> R$ 29,90 </label>
            </div>
            <DsButton text="comprar"></DsButton>
          </footer>
        </S_.BoxContents>
      </Box>

      <S_.BoxTags >
        <h4>CATEGORIAS MAIS BUSCADAS</h4>
        {tags.lineOne.map((tag) => (
          <DsTag text={tag} />
        ))}
        {tags.lineTwo.map((tag) => (
          <DsTag text={tag} />
        ))}
      </S_.BoxTags>
    </div>
  );
};
