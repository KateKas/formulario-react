import React, { useContext, useState } from "react";
import { TextField, Button } from "@mui/material";
import useErros from "../../hooks/useErros";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        id="senha"
        label="Senha"
        type="password"
        name="senha"
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
