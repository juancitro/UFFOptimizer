'use strict';

var _chai = require('chai');

var _esprima = require('esprima');

var _ = require('..');

describe('global increment', function () {
    it('becomes read/write', function () {
        var ast = (0, _esprima.parse)('b++;');

        var scopeManager = (0, _.analyze)(ast);
        (0, _chai.expect)(scopeManager.scopes).to.have.length(1);
        var globalScope = scopeManager.scopes[0];
        (0, _chai.expect)(globalScope.type).to.be.equal('global');
        (0, _chai.expect)(globalScope.variables).to.have.length(0);
        (0, _chai.expect)(globalScope.references).to.have.length(1);
        (0, _chai.expect)(globalScope.references[0].isReadWrite()).to.be.true;
    });
});

// vim: set sw=4 ts=4 et tw=80 :
// -*- coding: utf-8 -*-
//  Copyright (C) 2015 Yusuke Suzuki <utatane.tea@gmail.com>
//
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//    * Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
//
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
//  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
//  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
//  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
//  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
//  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
//  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
//  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
//  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1pbmNyZW1lbnQuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImFzdCIsInNjb3BlTWFuYWdlciIsInNjb3BlcyIsInRvIiwiaGF2ZSIsImxlbmd0aCIsImdsb2JhbFNjb3BlIiwidHlwZSIsImJlIiwiZXF1YWwiLCJ2YXJpYWJsZXMiLCJyZWZlcmVuY2VzIiwiaXNSZWFkV3JpdGUiLCJ0cnVlIl0sIm1hcHBpbmdzIjoiOztBQXVCQTs7QUFDQTs7QUFDQTs7QUFFQUEsU0FBUyxrQkFBVCxFQUE2QixZQUFXO0FBQ3BDQyxPQUFHLG9CQUFILEVBQXlCLFlBQVc7QUFDaEMsWUFBTUMsTUFBTSwyQkFBWjs7QUFFQSxZQUFNQyxlQUFlLGVBQVFELEdBQVIsQ0FBckI7QUFDQSwwQkFBT0MsYUFBYUMsTUFBcEIsRUFBNEJDLEVBQTVCLENBQStCQyxJQUEvQixDQUFvQ0MsTUFBcEMsQ0FBMkMsQ0FBM0M7QUFDQSxZQUFNQyxjQUFjTCxhQUFhQyxNQUFiLENBQW9CLENBQXBCLENBQXBCO0FBQ0EsMEJBQU9JLFlBQVlDLElBQW5CLEVBQXlCSixFQUF6QixDQUE0QkssRUFBNUIsQ0FBK0JDLEtBQS9CLENBQXFDLFFBQXJDO0FBQ0EsMEJBQU9ILFlBQVlJLFNBQW5CLEVBQThCUCxFQUE5QixDQUFpQ0MsSUFBakMsQ0FBc0NDLE1BQXRDLENBQTZDLENBQTdDO0FBQ0EsMEJBQU9DLFlBQVlLLFVBQW5CLEVBQStCUixFQUEvQixDQUFrQ0MsSUFBbEMsQ0FBdUNDLE1BQXZDLENBQThDLENBQTlDO0FBQ0EsMEJBQU9DLFlBQVlLLFVBQVosQ0FBdUIsQ0FBdkIsRUFBMEJDLFdBQTFCLEVBQVAsRUFBZ0RULEVBQWhELENBQW1ESyxFQUFuRCxDQUFzREssSUFBdEQ7QUFDSCxLQVZEO0FBV0gsQ0FaRDs7QUFjQTtBQXpDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbG9iYWwtaW5jcmVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLSotIGNvZGluZzogdXRmLTggLSotXG4vLyAgQ29weXJpZ2h0IChDKSAyMDE1IFl1c3VrZSBTdXp1a2kgPHV0YXRhbmUudGVhQGdtYWlsLmNvbT5cbi8vXG4vLyAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyAgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbi8vICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbi8vXG4vLyAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbi8vICBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4vLyAgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0Vcbi8vICBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgPENPUFlSSUdIVCBIT0xERVI+IEJFIExJQUJMRSBGT1IgQU5ZXG4vLyAgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVNcbi8vICAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7XG4vLyAgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EXG4vLyAgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vICAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0Zcbi8vICBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnZXNwcmltYSc7XG5pbXBvcnQgeyBhbmFseXplIH0gZnJvbSAnLi4nO1xuXG5kZXNjcmliZSgnZ2xvYmFsIGluY3JlbWVudCcsIGZ1bmN0aW9uKCkge1xuICAgIGl0KCdiZWNvbWVzIHJlYWQvd3JpdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYXN0ID0gcGFyc2UoYGIrKztgKTtcblxuICAgICAgICBjb25zdCBzY29wZU1hbmFnZXIgPSBhbmFseXplKGFzdCk7XG4gICAgICAgIGV4cGVjdChzY29wZU1hbmFnZXIuc2NvcGVzKS50by5oYXZlLmxlbmd0aCgxKTtcbiAgICAgICAgY29uc3QgZ2xvYmFsU2NvcGUgPSBzY29wZU1hbmFnZXIuc2NvcGVzWzBdO1xuICAgICAgICBleHBlY3QoZ2xvYmFsU2NvcGUudHlwZSkudG8uYmUuZXF1YWwoJ2dsb2JhbCcpO1xuICAgICAgICBleHBlY3QoZ2xvYmFsU2NvcGUudmFyaWFibGVzKS50by5oYXZlLmxlbmd0aCgwKTtcbiAgICAgICAgZXhwZWN0KGdsb2JhbFNjb3BlLnJlZmVyZW5jZXMpLnRvLmhhdmUubGVuZ3RoKDEpO1xuICAgICAgICBleHBlY3QoZ2xvYmFsU2NvcGUucmVmZXJlbmNlc1swXS5pc1JlYWRXcml0ZSgpKS50by5iZS50cnVlO1xuICAgIH0pO1xufSk7XG5cbi8vIHZpbTogc2V0IHN3PTQgdHM9NCBldCB0dz04MCA6XG4iXX0=
