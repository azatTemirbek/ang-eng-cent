// import React, { Component } from 'react';
var createReactClass = require('create-react-class');
// import { connect } from 'react-redux'



export function ComponentBuilder(displayName = 'Component') {

  if (this instanceof ComponentBuilder) {
    this.displayName = displayName;
    this.comp = {}
  } else {
    return new ComponentBuilder(displayName);
  }
  
  this.render = (fn) => {
    this.comp.render = fn
    return this
  }
  
  this.set = (fn, name = undefined) => {
    if (fn.name !== undefined && name !== undefined) {
      this.comp[fn.name] = fn
    } else {
      new Error('use set method with named functions or give name as asecond paramener')
    }
    return this
  }

  this.build = () => {
    if (!this.comp.render) {
      throw new Error('Component render method required')
    }
    // if (this._mapStateToProps || this._mapDispatchToProps) {
    //   // If redux methods are provided, connect to store
    //   return connect(this._mapStateToProps, this._mapDispatchToProps)(this.comp)
    // }
    let comp = createReactClass(this.comp);
    return comp
  }
  return this
}
