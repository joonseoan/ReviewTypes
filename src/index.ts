import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

const customMap = new CustomMap("map");
const user = new User();
const company = new Company();

// [ Solution 2]
customMap.addMarker(user);
customMap.addMarker(company);

// [Solution 1]
// customMap.addUserMarker(user);
// customMap.addCompanyMarker(company);
