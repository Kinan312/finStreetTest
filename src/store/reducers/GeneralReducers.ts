import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {tron} from 'assets/images/tronXML';
import {Data} from '../../interfaces/dataTableInterface';

interface GeneralState {
  dialogVisible: boolean;
  dialogContent: Data;
}

let initialState: GeneralState = {
  dialogVisible: false,
  dialogContent: {
    seq: '01',
    currentName: 'Quantlase Chain',
    short: 'QL',
    price: 'AED 78.485.1',
    Change: '+7.45',
    logo: tron,
    chainKey: ['31uqnp^cVW14vn30@hIK', 'fjEq@4^tdS8W5&g5^@vH'],
  },
};

const generalSlice = createSlice({
  name: 'General',
  initialState,
  reducers: {
    showDialog(state, actions: PayloadAction<any>) {
      state.dialogVisible = actions.payload.visible;
      state.dialogContent = actions.payload.data;
    },
  },
});

export const {showDialog} = generalSlice.actions;

export default generalSlice.reducer;
