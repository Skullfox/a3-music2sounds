#include "script_component.hpp"

class CfgPatches {
	class ADDON {
		units[] = {};
		weapons[] = {};
		requiredVersion = REQUIRED_VERSION;
		requiredAddons[] = {};
		steamid = 0000;
	};
};

class CfgSounds{
	#include "CfgSounds.hpp"
};
#include "soundlist.hpp"
