export default interface Module {
  init(): Promise<void> | void;
}
