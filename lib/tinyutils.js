function getLowerCaseEnv(key){
	return ( process.env[key] || "" ).toLowerCase()
}

function isEnvTrue(key){
	return getLowerCaseEnv(key) == "true"
}

function formatTime(ms){
	let sec = Math.floor(ms / 1000)
	let min = Math.floor(sec / 60)
	sec -= min * 60
	let hour = Math.floor(min / 60)
	min -= hour * 60
	if(hour) return `${hour} : ${min} : ${sec}`
	return `${min} : ${sec}`
}

function formatName(name, title){
	if(!title) return name
	return `${title} ${name}`
}

module.exports = {
	getLowerCaseEnv: getLowerCaseEnv,
	isEnvTrue: isEnvTrue,
	formatTime: formatTime,
	formatName: formatName
}
