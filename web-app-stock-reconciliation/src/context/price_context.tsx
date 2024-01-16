import React, { createContext, useState, useContext, ReactNode, Dispatch } from 'react';

interface Price {
  Kartacze: number;
  Babka: number;
  Kiszka: number;
}

// type PriceContextType = {
//   state: State;
//   dispatch: Dispatch<Action>;
// };

// interface State {
//   prices: Price;
// }

// type Action = { type: 'UPDATE_PRICES'; payload: Price };

const PriceContext = createContext<PriceContextType | undefined>();
export const usePrice = () => useContext(PriceContext);
