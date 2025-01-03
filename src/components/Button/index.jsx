// Importação dos componentes estilizados ButtonRed e ButtonWhite, definidos em 'styles'
import { ButtonRed, ButtonWhite } from "./styles";

// Definição do componente Button
function Button({ children, red, ...props }) {
  return (
    <>
      {/* Verificação condicional para renderizar o botão vermelho ou branco */}
      {red ? (
        // Se a prop 'red' for verdadeira, renderiza o ButtonRed
        <ButtonRed {...props}>{children}</ButtonRed>
      ) : (
        // Se a prop 'red' for falsa, renderiza o ButtonWhite
        <ButtonWhite {...props}>{children}</ButtonWhite>
      )}
    </>
  );
}

// Exportação do componente Button para ser utilizado em outros lugares da aplicação
export default Button;