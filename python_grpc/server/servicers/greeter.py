import grpc

from python_grpc.grpc_types.service_pb2_grpc import GreeterServicer
from python_grpc.grpc_types.service_pb2 import GreetingRequest, GreetingResponse


class Greet(GreeterServicer):
    def Greet(self, request: GreetingRequest, context: grpc.ServicerContext) -> GreetingResponse:
        return GreetingResponse(greeting=f"Hello, {request.name}")
