/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import {expect} from 'chai'
import React from 'react'

import Row from './Row'

describe('Row', () => {
  it('should works', () => {
    expect(<Row />).to.be.ok
  })
})
