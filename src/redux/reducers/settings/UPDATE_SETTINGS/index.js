function updateSettings(state, action) {
  console.log('UPDATE SETTINGS:', action);
  return {
    ...state,
    ...action.payload,
  };
}

export default updateSettings;
