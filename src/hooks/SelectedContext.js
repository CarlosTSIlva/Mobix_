import { createContext, useState } from "react";

export const SelectedContext = createContext({});

export function SelectedContexts({ children }) {
  const [selecionartudoListagem, setSelecionarTudoListagem] = useState(false);
  const [selecionartudoDetail, setSelecionartudoDetail] = useState(false);
  const [selecionartudoCreate, setSelecionartudoCreate] = useState(false);
  const [selecionartudoEdit, setSelecionartudoEdit] = useState(false);
  const [selecionartudoDelete, setSelecionartudoDelete] = useState(false);

  function SelectAllList() {
    setSelecionarTudoListagem(!selecionartudoListagem);
  }

  function SelectAllDetailList() {
    setSelecionartudoDetail(!selecionartudoDetail);
  }

  function SelectAllCreateList() {
    setSelecionartudoCreate(!selecionartudoCreate);
  }

  function SelectAllEditList() {
    setSelecionartudoEdit(!selecionartudoEdit);
  }

  function SelectAllDeleteList() {
    setSelecionartudoDelete(!selecionartudoDelete);
  }

  return (
    <SelectedContext.Provider
      value={{
        SelectAllList,
        SelectAllDetailList,
        SelectAllCreateList,
        SelectAllEditList,
        SelectAllDeleteList,
        selecionartudoListagem,
        selecionartudoDetail,
        selecionartudoCreate,
        selecionartudoEdit,
        selecionartudoDelete,
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
}
