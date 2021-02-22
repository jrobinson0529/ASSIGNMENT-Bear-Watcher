const bearFormPrint = () => {
  document.querySelector('#bearForm').innerHTML = `<form>
  <div class="form-group">
    <label for="bearName">Bear's Name</label>
    <input type="text" class="form-control" id="bearName" aria-describedby="bearName">
  </div>
  <div class="form-group">
    <label for="bearUrl">Image Link</label>
    <input type="url" class="form-control" id="bearUrl" required />
  </div>
  <div class="btn-container">
  <button type="submit" class="btn btn-primary submit-btn">Submit</button>
  </div>
</form>`;
};

export default bearFormPrint;
