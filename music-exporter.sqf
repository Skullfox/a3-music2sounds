[]spawn{

  _configs = "true" configClasses (configFile >> "CfgMusic");
  diag_log "MUSIC EXPORT";
  _data = [];
  {
      _ar = str _x splitString "/";

      _track = _ar select 2;

      _duration = getNumber (configFile >> "CfgMusic" >> _track >> "duration");
      _name = getText (configFile >> "CfgMusic" >> _track >> "name");
      _file = getArray (configFile >> "CfgMusic" >> _track >> "sound");
      _path = _file select 0;

      if(_name == "")then{
        diag_log format["%1 skipped",_track];
      }else{
        diag_log format["%1 - %2 - %3 - %4",_track,_name,_path,_duration];
        _data pushBack [_track,_name,_path splitString "\" joinString "\\"  ,_duration];
      };


  } forEach _configs;
  copyToClipboard str _data;
  hint "Copied to clipboard";
  diag_log "MUSIC EXPORT DUMP END";
};
