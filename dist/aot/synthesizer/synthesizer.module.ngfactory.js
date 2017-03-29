/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from '../../synthesizer/synthesizer.module';
import * as import2 from '@angular/http';
import * as import3 from '../../synthesizer/services/pipeline/synthesis/midi-note.service';
import * as import4 from '../../synthesizer/services/pipeline/inputs/midi-input.service';
import * as import5 from '../../synthesizer/services/pipeline/inputs/drum-machine-input.service';
import * as import6 from '../../synthesizer/services/pipeline/inputs/note-input.service';
import * as import7 from '../../synthesizer/services/pipeline/outputs/audio-output.service';
import * as import8 from '../../synthesizer/services/pipeline/synthesis/drum-pcm-triggering.service';
import * as import9 from '../../synthesizer/services/pipeline/pipeline.service';
import * as import10 from '../../synthesizer/services/pipeline/processors/sequencer.service';
import * as import11 from '../../synthesizer/services/synth-stream-wrapper';
var SynthesizerModuleInjector = (function (_super) {
    __extends(SynthesizerModuleInjector, _super);
    function SynthesizerModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_BrowserXhr_2", {
        get: function () {
            if ((this.__BrowserXhr_2 == null)) {
                (this.__BrowserXhr_2 = new import2.BrowserXhr());
            }
            return this.__BrowserXhr_2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_ResponseOptions_3", {
        get: function () {
            if ((this.__ResponseOptions_3 == null)) {
                (this.__ResponseOptions_3 = new import2.BaseResponseOptions());
            }
            return this.__ResponseOptions_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_XSRFStrategy_4", {
        get: function () {
            if ((this.__XSRFStrategy_4 == null)) {
                (this.__XSRFStrategy_4 = import2.ɵb());
            }
            return this.__XSRFStrategy_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_XHRBackend_5", {
        get: function () {
            if ((this.__XHRBackend_5 == null)) {
                (this.__XHRBackend_5 = new import2.XHRBackend(this._BrowserXhr_2, this._ResponseOptions_3, this._XSRFStrategy_4));
            }
            return this.__XHRBackend_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_RequestOptions_6", {
        get: function () {
            if ((this.__RequestOptions_6 == null)) {
                (this.__RequestOptions_6 = new import2.BaseRequestOptions());
            }
            return this.__RequestOptions_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_Http_7", {
        get: function () {
            if ((this.__Http_7 == null)) {
                (this.__Http_7 = import2.ɵc(this._XHRBackend_5, this._RequestOptions_6));
            }
            return this.__Http_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_MidiNoteService_8", {
        get: function () {
            if ((this.__MidiNoteService_8 == null)) {
                (this.__MidiNoteService_8 = new import3.MidiNoteService());
            }
            return this.__MidiNoteService_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_MidiInputService_9", {
        get: function () {
            if ((this.__MidiInputService_9 == null)) {
                (this.__MidiInputService_9 = new import4.MidiInputService(this.parent.get(import0.NgZone), this._Http_7));
            }
            return this.__MidiInputService_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_DrumMachineInputService_10", {
        get: function () {
            if ((this.__DrumMachineInputService_10 == null)) {
                (this.__DrumMachineInputService_10 = new import5.DrumMachineInputService());
            }
            return this.__DrumMachineInputService_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_NoteInputService_11", {
        get: function () {
            if ((this.__NoteInputService_11 == null)) {
                (this.__NoteInputService_11 = new import6.NoteInputService());
            }
            return this.__NoteInputService_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_AudioOutputService_12", {
        get: function () {
            if ((this.__AudioOutputService_12 == null)) {
                (this.__AudioOutputService_12 = new import7.AudioOutputService());
            }
            return this.__AudioOutputService_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_DrumPCMTriggeringService_13", {
        get: function () {
            if ((this.__DrumPCMTriggeringService_13 == null)) {
                (this.__DrumPCMTriggeringService_13 = new import8.DrumPCMTriggeringService(this._Http_7));
            }
            return this.__DrumPCMTriggeringService_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_PipelineService_14", {
        get: function () {
            if ((this.__PipelineService_14 == null)) {
                (this.__PipelineService_14 = new import9.PipelineService(this._MidiNoteService_8, this._MidiInputService_9, this._DrumMachineInputService_10, this._NoteInputService_11, this._AudioOutputService_12, this._DrumPCMTriggeringService_13));
            }
            return this.__PipelineService_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SynthesizerModuleInjector.prototype, "_SequencerService_15", {
        get: function () {
            if ((this.__SequencerService_15 == null)) {
                (this.__SequencerService_15 = new import10.SequencerService(this.parent.get(import11.SynthStreamWrapper), this._PipelineService_14));
            }
            return this.__SequencerService_15;
        },
        enumerable: true,
        configurable: true
    });
    SynthesizerModuleInjector.prototype.createInternal = function () {
        this._HttpModule_0 = new import2.HttpModule();
        this._SynthesizerModule_1 = new import1.SynthesizerModule();
        return this._SynthesizerModule_1;
    };
    SynthesizerModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.HttpModule)) {
            return this._HttpModule_0;
        }
        if ((token === import1.SynthesizerModule)) {
            return this._SynthesizerModule_1;
        }
        if ((token === import2.BrowserXhr)) {
            return this._BrowserXhr_2;
        }
        if ((token === import2.ResponseOptions)) {
            return this._ResponseOptions_3;
        }
        if ((token === import2.XSRFStrategy)) {
            return this._XSRFStrategy_4;
        }
        if ((token === import2.XHRBackend)) {
            return this._XHRBackend_5;
        }
        if ((token === import2.RequestOptions)) {
            return this._RequestOptions_6;
        }
        if ((token === import2.Http)) {
            return this._Http_7;
        }
        if ((token === import3.MidiNoteService)) {
            return this._MidiNoteService_8;
        }
        if ((token === import4.MidiInputService)) {
            return this._MidiInputService_9;
        }
        if ((token === import5.DrumMachineInputService)) {
            return this._DrumMachineInputService_10;
        }
        if ((token === import6.NoteInputService)) {
            return this._NoteInputService_11;
        }
        if ((token === import7.AudioOutputService)) {
            return this._AudioOutputService_12;
        }
        if ((token === import8.DrumPCMTriggeringService)) {
            return this._DrumPCMTriggeringService_13;
        }
        if ((token === import9.PipelineService)) {
            return this._PipelineService_14;
        }
        if ((token === import10.SequencerService)) {
            return this._SequencerService_15;
        }
        return notFoundResult;
    };
    SynthesizerModuleInjector.prototype.destroyInternal = function () {
    };
    return SynthesizerModuleInjector;
}(import0.ɵNgModuleInjector));
export var SynthesizerModuleNgFactory = new import0.NgModuleFactory(SynthesizerModuleInjector, import1.SynthesizerModule);
//# sourceMappingURL=synthesizer.module.ngfactory.js.map