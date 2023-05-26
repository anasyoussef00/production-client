export declare interface IContainerSlot {
  id: string;
  title: string;
  containerSlotChildren?: IContainerSlotChild[];
}

export declare interface IContainerSlotChild {
  id: string;
  title: string;
  flexable: boolean;
}
