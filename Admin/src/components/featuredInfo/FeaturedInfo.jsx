import { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowUpward } from "@material-ui/icons";
import { publicRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [shifts, setShifts] = useState([]);
  const [clients, setClients] = useState([]);
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    const getShifts = async () => {
      try {
        const res = await publicRequest.get("/shifts");
        setShifts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getShifts();
  }, []);

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await publicRequest.get("/clients");
        setClients(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);
  useEffect(() => {
    const getStaffs = async () => {
      try {
        const res = await publicRequest.get("/users");
        setStaffs(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getStaffs();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Shifts</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{shifts?.length}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Staffs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{staffs?.length}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Clients</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{clients?.length}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
