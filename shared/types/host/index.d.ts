/// <reference types="react" />

type Props = Record<string, unknown>;

interface PageModuleProps {
  moduleHeader?: React.FC<Props>;
}

// HostStore

// HostStoreMessage
type Status = "normal" | "system" | "success" | "warning" | "alert";

interface ShellStoreMessage {
  setMessage: (message: string, status: Status) => void,
}

interface ShellStoreTitle {
  setTitle: (value: string) => void,
}

interface ShellStore {
  storeMessages?: ShellStoreMessage | null,
  storeUser?: Record<string, unknown> | null,
  storeShell?: ShellStoreTitle | null,
}


declare module 'host/StoreMessages' {
  const storeMessages: ShellStoreMessage;
  export default storeMessages;
}
