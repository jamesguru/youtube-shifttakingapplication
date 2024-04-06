import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Shift</h1>
      <form className="addProductForm">
       
        <div className="addProductItem">
          <label>Location</label>
          <input type="text" placeholder="789 Oak St, Village, Country" />
        </div>
        <div className="addProductItem">
          <label>Date And Time</label>
          <input type="text" placeholder="date" />
          <input type="text" placeholder="10:00 AM - 12:00 PM"/>
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <input type="text" placeholder="AM/PM" />
        </div>
        <div className="addProductItem">
          <label>Client</label>
          <input type="text" placeholder="John Doe" />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" placeholder="3 hours" />
        </div>
        <div className="addProductItem">
          <label>Notes</label>
       <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <div className="addProductItem">
          <label>Assign Shift</label>
          <select name="" id="">
            <option value=""> James Doe</option>
            <option value="">John Doe</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
