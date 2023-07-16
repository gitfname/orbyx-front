
import { Box, Text } from "@chakra-ui/react"
import { Tilt } from "react-tilt"

const ourThechnologies = [
    [
        {
            "id": 20,
            "name": "PhotoShop",
            "mainColor": "#00C8FF",
            "textColor": "#FFFFFF"
        },
        {
            "id": 21,
            "name": "Substance",
            "mainColor": "#712EA3",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 22,
            "name": "3ds Max",
            "mainColor": "#0063BF",
            "textColor": "#FFFFFF"
        },
        {
            "id": 23,
            "name": "Figma",
            "mainColor": "#F24E1E",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 24,
            "name": "Illustrator",
            "mainColor": "#FF7C00",
            "textColor": "#FFFFFF"
        },
        {
            "id": 25,
            "name": "Autodesk Maya",
            "mainColor": "#1D9DBA",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 26,
            "name": "ZBrush",
            "mainColor": "#FF7700",
            "textColor": "#FFFFFF"
        },
        {
            "id": 27,
            "name": "Painter",
            "mainColor": "#FFAE1C",
            "textColor": "#000000"
        }
    ],
    [
        {
            "id": 28,
            "name": "Procreate",
            "mainColor": "#FF275E",
            "textColor": "#FFFFFF"
        },
        {
            "id": 29,
            "name": "Lottie Files",
            "mainColor": "#FF4500",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 30,
            "name": "AfterEffects",
            "mainColor": "#D291FF",
            "textColor": "#000000"
        },
        {
            "id": 31,
            "name": "C4D",
            "mainColor": "#11161C",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 32,
            "name": "Blender",
            "mainColor": "#F5792A",
            "textColor": "#000000"
        },
        {
            "id": 33,
            "name": "Final Cut Pro",
            "mainColor": "#2B2B2B",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 35,
            "name": "Swift",
            "mainColor": "#FF6136",
            "textColor": "#FFFFFF"
        },
        {
            "id": 36,
            "name": "Flutter",
            "mainColor": "#02569B",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 37,
            "name": "React Native",
            "mainColor": "#61DAFB",
            "textColor": "#000000"
        },
        {
            "id": 38,
            "name": "Objective-C",
            "mainColor": "#EE2C2E",
            "textColor": "#FFFFFF"
        }
    ],

    [
        {
            "id": 39,
            "name": "Webpack",
            "mainColor": "#1B74CC",
            "textColor": "#FFFFFF"
        },
        {
            "id": 40,
            "name": "Express",
            "mainColor": "#000000",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 41,
            "name": "MongoDB",
            "mainColor": "#13AA52",
            "textColor": "#FFFFFF"
        },
        {
            "id": 42,
            "name": "PostgreSQL",
            "mainColor": "#336791",
            "textColor": "#FFFFFF"
        }
    ],
    [
        {
            "id": 43,
            "name": "Redis",
            "mainColor": "#D82C20",
            "textColor": "#FFFFFF"
        },
        {
            "id": 58,
            "name": "MobX",
            "mainColor": "#FF9955",
            "textColor": "#000000"
          }
    ],
    [
        {
          "id": 44,
          "name": "Kotlin",
          "mainColor": "#A97BFF",
          "textColor": "#FFFFFF"
        },
        {
          "id": 45,
          "name": "React.js",
          "mainColor": "#61DAFB",
          "textColor": "#000000"
        }
      ],
      [
        {
          "id": 46,
          "name": "TypeScript",
          "mainColor": "#007ACC",
          "textColor": "#FFFFFF"
        },
        {
          "id": 47,
          "name": "Java",
          "mainColor": "#007396",
          "textColor": "#FFFFFF"
        }
      ],
      [
        {
          "id": 48,
          "name": "JavaScript",
          "mainColor": "#F7DF1E",
          "textColor": "#000000"
        },
        {
          "id": 49,
          "name": "Python",
          "mainColor": "#3776AB",
          "textColor": "#FFFFFF"
        }
      ],
      [
        {
          "id": 50,
          "name": "Node.js",
          "mainColor": "#43853D",
          "textColor": "#FFFFFF"
        },
        {
          "id": 51,
          "name": "PHP",
          "mainColor": "#777BB3",
          "textColor": "#FFFFFF"
        }
      ],
      [
        {
          "id": 52,
          "name": "Angular",
          "mainColor": "#DD0031",
          "textColor": "#FFFFFF"
        },
        {
          "id": 53,
          "name": "Vue.js",
          "mainColor": "#4FC08D",
          "textColor": "#FFFFFF"
        }
      ],
      [
        {
          "id": 54,
          "name": "Gatsby.js",
          "mainColor": "#663399",
          "textColor": "#FFFFFF"
        },
        {
          "id": 55,
          "name": "Next.js",
          "mainColor": "#000000",
          "textColor": "#FFFFFF"
        }
      ],
      [
        {
          "id": 56,
          "name": "Redux",
          "mainColor": "#764ABC",
          "textColor": "#FFFFFF"
        },
        {
          "id": 57,
          "name": "GraphQL",
          "mainColor": "#E10098",
          "textColor": "#FFFFFF"
        }
      ]
]

function OurTechnologies() {
    return (
        <div className="w-full overflow-x-hidden pb-2 pt-3 px-4">

            <div className="w-max flex flex-nowrap items-center gap-6 test-anim">

                {
                    ourThechnologies.map(tech => (
                        <div className="flex flex-col gap-3">
                            {
                                tech.map(item => (
                                    <Tilt
                                        key={item.id}
                                        max={50}
                                        reverse={true}
                                        transition={true}
                                    >
                                        <Box
                                            className="w-28 transition-colors duration-300 aspect-square bg-slate-800
                                            shadow-md shadow-black/10 rounded-xl grid place-items-center p-2 group"
                                            _hover={{
                                                bgColor: item.mainColor,
                                            }}
                                        >
                                            <Text
                                                _groupHover={{
                                                    color: item.textColor
                                                }}
                                                className="text-sm text-white/80 font-[Inter] font-light text-center"
                                            >
                                                {item.name}
                                            </Text>
                                        </Box>
                                    </Tilt>
                                ))
                            }
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default OurTechnologies