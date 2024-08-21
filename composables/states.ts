export const useCounter = () => useState<number>("Counter", () => 0);
export const useColor = () => useState<string>('color', () => "pink");
