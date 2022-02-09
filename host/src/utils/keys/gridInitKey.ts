import { getApiAgGridKey } from '../../api/apiAgGridKey';
import { LicenseManager } from 'ag-grid-enterprise';

const gridInitKey = () => {

  if (process.env.NODE_ENV === 'development') {
    LicenseManager.setLicenseKey(process.env.AG_GRID_KEY!);
  } else {
    void getApiAgGridKey().then( response => {
      if (response.data) {
        LicenseManager.setLicenseKey(response.data);
      }
    });
  }

};

export default gridInitKey;