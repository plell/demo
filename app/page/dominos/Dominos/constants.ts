import { Vector3 } from "three";

export const initDominos = [
    {
        "x": -69.73794971906793,
        "y": 0.9999999999999878,
        "z": 54.98534498944599
    },
    {
        "x": -69.89412538790064,
        "y": 0.9999999999999895,
        "z": 47.74928806686242
    },
    {
        "x": -68.93462429709362,
        "y": 1.0000000000000195,
        "z": 40.144067116157714
    },
    {
        "x": -67.93599392621476,
        "y": 0.9999999999999925,
        "z": 33.87846200391078
    },
    {
        "x": -66.73093763829992,
        "y": 0.9999999999999941,
        "z": 26.305716094866398
    },
    {
        "x": -64.9034477712639,
        "y": 0.9999999999999962,
        "z": 16.765854193247208
    },
    {
        "x": -63.63267546124438,
        "y": 0.9999999999999977,
        "z": 10.614858482966213
    },
    {
        "x": -61.55086951475454,
        "y": 0.9999999999999993,
        "z": 2.9432867058778243
    },
    {
        "x": -58.94908344668114,
        "y": 1.000000000000001,
        "z": -5.406014737816463
    },
    {
        "x": -56.100423508051335,
        "y": 1.000000000000003,
        "z": -14.070955758312238
    },
    {
        "x": -54.02169740105538,
        "y": 1.0000000000000044,
        "z": -20.019569771806857
    },
    {
        "x": -51.34446601825682,
        "y": 1.000000000000006,
        "z": -27.232269680170987
    },
    {
        "x": -48.92788246339613,
        "y": 1.0000000000000073,
        "z": -33.28580036569585
    },
    {
        "x": -45.837815909242714,
        "y": 1.000000000000037,
        "z": -39.26840651944951
    },
    {
        "x": -42.38131094124281,
        "y": 1.00000000000001,
        "z": -44.535749671378966
    },
    {
        "x": -37.680701138812665,
        "y": 1.000000000000011,
        "z": -49.70412974489125
    },
    {
        "x": -31.270929508590324,
        "y": 1.0000000000000124,
        "z": -55.639303752973206
    },
    {
        "x": -25.954483990649383,
        "y": 1.0000000000000133,
        "z": -60.41055758594075
    },
    {
        "x": -20.425383495804727,
        "y": 1.0000000000000144,
        "z": -64.80425590040545
    },
    {
        "x": -14.751150668673873,
        "y": 1.0000000000000437,
        "z": -68.59473965595441
    },
    {
        "x": -7.558603195602887,
        "y": 1.000000000000016,
        "z": -71.89978871279038
    },
    {
        "x": -1.3931146330306363,
        "y": 1.0000000000000164,
        "z": -73.57381870773554
    },
    {
        "x": 5.090128877411539,
        "y": 1.0000000000000164,
        "z": -74.48708116788546
    },
    {
        "x": 11.811569999472235,
        "y": 1.0000000000000167,
        "z": -74.96627354228059
    },
    {
        "x": 18.475943125411145,
        "y": 1.0000000000000167,
        "z": -75.32125956527116
    },
    {
        "x": 24.988133469426984,
        "y": 1.0000000000000167,
        "z": -75.32125956527113
    },
    {
        "x": 32.554478974216735,
        "y": 1.0000000000000164,
        "z": -73.69118225911944
    },
    {
        "x": 38.1217910755061,
        "y": 1.000000000000044,
        "z": -69.52394125116524
    },
    {
        "x": 43.76112858944809,
        "y": 1.000000000000014,
        "z": -63.400148215505936
    },
    {
        "x": 47.46735107405272,
        "y": 1.0000000000000129,
        "z": -58.43873193514548
    },
    {
        "x": 51.221351014609255,
        "y": 0.999999999999983,
        "z": -51.53257711597561
    },
    {
        "x": 54.00250049544291,
        "y": 1.0000000000000098,
        "z": -44.406966683497046
    },
    {
        "x": 55.74408625348281,
        "y": 1.0000000000000366,
        "z": -37.138616214713124
    },
    {
        "x": 56.789897306491135,
        "y": 1.0000000000000067,
        "z": -29.607040258795394
    },
    {
        "x": 57.66291244641126,
        "y": 1.0000000000000047,
        "z": -21.411726433124585
    },
    {
        "x": 58.21408823842189,
        "y": 1.0000000000000022,
        "z": -10.45113626692492
    },
    {
        "x": 58.175439898284,
        "y": 1.0000000000000009,
        "z": -3.579477510534957
    },
    {
        "x": 57.909814326625465,
        "y": 0.999999999999999,
        "z": 4.57569023612794
    },
    {
        "x": 57.48232313172713,
        "y": 1.000000000000026,
        "z": 11.338502173680979
    },
    {
        "x": 56.632065558465875,
        "y": 0.9999999999999957,
        "z": 19.571231783365533
    },
    {
        "x": 55.51765548418836,
        "y": 0.999999999999994,
        "z": 27.221374998604233
    },
    {
        "x": 54.35013710206584,
        "y": 0.9999999999999925,
        "z": 33.904997128896014
    },
    {
        "x": 52.974656248803036,
        "y": 0.9999999999999911,
        "z": 40.0715096633721
    },
    {
        "x": 50.20747366192437,
        "y": 0.9999999999999895,
        "z": 47.49561348445778
    },
    {
        "x": 46.116547889065814,
        "y": 0.9999999999999875,
        "z": 56.310269461569064
    },
    {
        "x": 43.0290345817173,
        "y": 0.9999999999999862,
        "z": 62.07766500058452
    },
    {
        "x": 39.04469670735489,
        "y": 0.9999999999999849,
        "z": 68.120682375443
    },
    {
        "x": 34.26750598648758,
        "y": 0.9999999999999839,
        "z": 72.27726415937374
    },
    {
        "x": 27.999180197781985,
        "y": 1.000000000000012,
        "z": 73.75170939406894
    },
    {
        "x": 21.563812370090638,
        "y": 0.9999999999999835,
        "z": 74.4088089954836
    },
    {
        "x": 14.520103366413531,
        "y": 0.9999999999999833,
        "z": 74.79332236960236
    },
    {
        "x": 8.118587480622304,
        "y": 0.9999999999999833,
        "z": 74.79332236960236
    },
    {
        "x": 1.2253638777091433,
        "y": 0.9999999999999835,
        "z": 74.29928936780529
    },
    {
        "x": -4.721076000073808,
        "y": 1.0000000000000122,
        "z": 72.86055074283573
    },
    {
        "x": -10.619610124104774,
        "y": 1.0000000000000129,
        "z": 70.12886782757901
    },
    {
        "x": -15.24825470715619,
        "y": 0.9999999999999855,
        "z": 65.4138972925647
    },
    {
        "x": -18.872541061167738,
        "y": 1.000000000000015,
        "z": 60.38031877869757
    },
    {
        "x": -21.698737536759342,
        "y": 0.9999999999999878,
        "z": 54.85565198160465
    },
    {
        "x": -23.618969943931933,
        "y": 1.0000000000000175,
        "z": 48.72391503833623
    },
    {
        "x": -24.596617495487855,
        "y": 0.9999999999999908,
        "z": 41.71365119019154
    },
    {
        "x": -25.142796302308025,
        "y": 1.0000000000000207,
        "z": 35.17464850494176
    },
    {
        "x": -24.935105118113515,
        "y": 0.9999999999999936,
        "z": 29.000551700599516
    },
    {
        "x": -23.93547024218714,
        "y": 0.9999999999999949,
        "z": 23.005869723355147
    },
    {
        "x": -22.3677871636489,
        "y": 0.9999999999999963,
        "z": 16.49437557288789
    },
    {
        "x": -20.28307634129607,
        "y": 0.9999999999999978,
        "z": 9.842097821201804
    },
    {
        "x": -17.380674678607125,
        "y": 0.9999999999999993,
        "z": 3.1423937605469234
    },
    {
        "x": -14.73066481107076,
        "y": 1.0000000000000007,
        "z": -2.8854121727536324
    },
    {
        "x": -11.657515216978513,
        "y": 1.000000000000002,
        "z": -8.9861875136597
    },
    {
        "x": -7.632206890768563,
        "y": 1.0000000000000315,
        "z": -14.453067068820218
    },
    {
        "x": -2.414780070594151,
        "y": 1.000000000000004,
        "z": -18.18564691395997
    },
    {
        "x": 2.9896418343485194,
        "y": 1.0000000000000047,
        "z": -21.237245232335823
    },
    {
        "x": 9.328748776647334,
        "y": 1.0000000000000053,
        "z": -24.01780290917094
    },
    {
        "x": 15.666594621974745,
        "y": 1.0000000000000056,
        "z": -24.77599620738542
    },
    {
        "x": 21.486130688448647,
        "y": 1.000000000000005,
        "z": -23.15177451113351
    },
    {
        "x": 26.2931771735026,
        "y": 1.0000000000000042,
        "z": -18.87294231688361
    },
    {
        "x": 30.352938654769197,
        "y": 1.000000000000003,
        "z": -14.367171602803126
    },
    {
        "x": 32.97483610666473,
        "y": 1.000000000000002,
        "z": -8.914247375493233
    },
    {
        "x": 34.35455330010913,
        "y": 1.0000000000000007,
        "z": -2.6377783628171585
    },
    {
        "x": 35.05491947780556,
        "y": 0.9999999999999992,
        "z": 3.370023442649284
    },
    {
        "x": 35.52724160617739,
        "y": 0.9999999999999979,
        "z": 9.606554054697398
    },
    {
        "x": 35.43551168029858,
        "y": 0.9999999999999963,
        "z": 16.473369633123525
    },
    {
        "x": 34.692431186080725,
        "y": 1.0000000000000233,
        "z": 22.88186194099424
    },
    {
        "x": 33.62248316702366,
        "y": 0.9999999999999936,
        "z": 29.04604455164292
    },
    {
        "x": 31.5154146846564,
        "y": 1.0000000000000207,
        "z": 34.93109373185288
    },
    {
        "x": 28.282225493986843,
        "y": 0.999999999999991,
        "z": 40.26819829792257
    },
    {
        "x": 23.965126153849045,
        "y": 0.99999999999999,
        "z": 44.959525517435736
    },
    {
        "x": 18.28723288313712,
        "y": 0.9999999999999893,
        "z": 47.7865188293963
    },
    {
        "x": 12.322099300788803,
        "y": 0.999999999999989,
        "z": 49.407507600932234
    },
    {
        "x": 6.259478226977463,
        "y": 0.999999999999989,
        "z": 49.63079315373167
    },
    {
        "x": 0.870320001426222,
        "y": 0.9999999999999896,
        "z": 46.7721186627453
    },
    {
        "x": -2.811282123759791,
        "y": 0.9999999999999907,
        "z": 41.878543999660224
    },
    {
        "x": -5.33985607359051,
        "y": 0.999999999999992,
        "z": 36.10576018189178
    },
    {
        "x": -6.480899263258332,
        "y": 0.9999999999999933,
        "z": 29.884860846207232
    },
    {
        "x": -6.884426949519609,
        "y": 0.9999999999999948,
        "z": 23.675305333753386
    },
    {
        "x": -6.03490372874362,
        "y": 0.9999999999999961,
        "z": 17.6135872120376
    },
    {
        "x": -3.09416663429148,
        "y": 0.9999999999999972,
        "z": 12.353544180286832
    },
    {
        "x": 1.6627468073261147,
        "y": 0.9999999999999981,
        "z": 8.4521555492544
    },
    {
        "x": 7.601096352307573,
        "y": 0.9999999999999986,
        "z": 6.332451109027602
    },
    {
        "x": 13.550883431867735,
        "y": 0.9999999999999983,
        "z": 7.439608473684018
    },
    {
        "x": 16.92277595416628,
        "y": 0.9999999999999971,
        "z": 12.774784402395682
    },
    {
        "x": 17.448595121557307,
        "y": 0.9999999999999958,
        "z": 18.880049718019563
    },
    {
        "x": 15.362682049786962,
        "y": 0.9999999999999946,
        "z": 24.601547129776066
    }
].map(p=> new Vector3(p.x,p.y,p.z))