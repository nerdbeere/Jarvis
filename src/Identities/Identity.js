class Identity {

  constructor(name, roles) {
    this._name = name;
    this._roles = roles;
  }

  get Name() {
    return this._name;
  }

  set Name(value) {
    this._name = value;
  }
}
